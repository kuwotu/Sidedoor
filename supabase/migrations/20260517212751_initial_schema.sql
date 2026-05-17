BEGIN;

CREATE TABLE users (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    first_name TEXT,
    last_name TEXT,
    country TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (user_id)
    VALUES (NEW.id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION handle_new_user();

COMMIT;

CREATE TABLE job_history (
    job_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
    job_title TEXT,
    industry TEXT,
    start_date DATE,
    end_date DATE,
    location TEXT,
    workplace_type TEXT NOT NULL,
    is_current BOOLEAN
);

CREATE TABLE career_story (
    story_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID UNIQUE REFERENCES users(user_id) ON DELETE CASCADE,
    story TEXT,
    statement TEXT,
    job_source TEXT NOT NULL,
    job_source_other TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE resources (
    resource_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT,
    resource_type TEXT,
    url TEXT
);

CREATE TABLE tags (
    tag_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE story_tags (
    story_id UUID REFERENCES career_story(story_id),
    tag_id UUID REFERENCES tags(tag_id),
    PRIMARY KEY (story_id, tag_id)
);

CREATE TABLE story_resources (
    story_id UUID REFERENCES career_story(story_id),
    resource_id UUID REFERENCES resources(resource_id),
    PRIMARY KEY (story_id, resource_id)
);

CREATE INDEX ON job_history(user_id);
CREATE INDEX ON career_story(user_id);
CREATE INDEX ON story_tags(tag_id);

COMMIT;

