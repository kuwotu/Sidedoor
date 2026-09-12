BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
    user_id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    country TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE job_history 
    ADD CONSTRAINT job_history_user_id_fkey 
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE;

ALTER TABLE career_story 
    ADD CONSTRAINT career_story_user_id_fkey 
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE;

COMMIT;