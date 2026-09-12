BEGIN;

INSERT INTO users (user_id, first_name, last_name, country)
VALUES 
    ('a0000000-0000-0000-0000-000000000001', 'Susan', 'Thompson', 'United Kingdom'),
    ('a0000000-0000-0000-0000-000000000002', 'James', 'Okafor', 'United Kingdom');

-- Insert career stories
INSERT INTO career_story (story_id, user_id, statement, story, job_source)
VALUES
    ('b0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 
     'Switching careers was the best decision I ever made',
     'I spent three years as a receptionist at a busy dental practice, 
     and while I was good at my job, I always found myself gravitating toward the 
     practice management software whenever something went wrong. 
     I became the unofficial IT person — the one everyone called when the system crashed or the printer stopped working. 
     That curiosity never went away.I started teaching myself to code in the evenings using free YouTube tutorials and a 
     Udemy course a colleague recommended. It was slow at first and honestly quite lonely, but something about problem 
     solving clicked with me in a way nothing else had. Six months in I enrolled at a coding bootcamp and handed in my notice. 
     Everyone thought I was mad.The bootcamp was intense — twelve weeks of barely sleeping, constantly feeling like the least 
     intelligent person in the room. But I came out the other side with a portfolio, a network, and my first junior developer role. 
     Three years later I''m a mid level engineer at a fintech startup and I genuinely love what I do. The skills I built as a receptionist 
     — patience, communication, staying calm under pressure — turned out to be more valuable in tech than I ever expected.',
     'linkedin_direct'),
    ('b0000000-0000-0000-0000-000000000002', 'a0000000-0000-0000-0000-000000000002',
     'My philosophy degree was more useful than I thought',
     'Studying philosophy at university taught me one thing above everything else — how to sit with a problem until it revealed itself. I had no idea at the time how directly that would translate into software engineering.
    After graduating I fell into lettings, mostly because a friend needed help and I needed income. I was good at it — clients trusted me, I understood contracts, I could read people. But I spent every spare moment reading about technology, following engineering blogs, and wondering whether it was too late to change direction. I was twenty six and convinced I had missed my window.
    A colleague mentioned a bootcamp and I almost dismissed it immediately. I had no maths background, no computer science foundation, nothing that looked like a traditional route in. But I applied anyway, got in, and spent the next four months having my assumptions about myself completely dismantled.
    What surprised me most was how much philosophy had prepared me. Breaking down an argument into premises and conclusions is not so different from breaking down a function into inputs and outputs. Thinking clearly under ambiguity is a skill engineers need constantly. My background was not a disadvantage — it was just a different kind of foundation. I am now two years into my engineering career and still learning every day. The route was unconventional. I would not change a single step of it.',
     'referral');

INSERT INTO job_history (job_id, user_id, job_title, industry, start_date, end_date, is_current, location, workplace_type)
VALUES
    (gen_random_uuid(), 'a0000000-0000-0000-0000-000000000001', 'Receptionist', 'Healthcare', '2018-01-01', '2018-06-01', false, 'United Kingdom', 'Onsite'),
    (gen_random_uuid(), 'a0000000-0000-0000-0000-000000000001', 'Admin Staff', 'Construction', '2018-09-01', '2019-06-01', false, 'United Kingdom', 'Onsite'),
    (gen_random_uuid(), 'a0000000-0000-0000-0000-000000000001', 'Tech Support', 'Tech', '2019-06-01', '2022-06-01', false, 'United Kingdom', 'Onsite'),
    (gen_random_uuid(), 'a0000000-0000-0000-0000-000000000001', 'Software Engineer', 'Tech', '2022-07-01', NULL, true, 'United Kingdom', 'Hybrid'),
    (gen_random_uuid(), 'a0000000-0000-0000-0000-000000000002', 'Receptionist', 'Property', '2018-01-01', '2018-06-01', false, 'United Kingdom', 'Onsite'),
    (gen_random_uuid(), 'a0000000-0000-0000-0000-000000000002', 'Correctional Officer', 'Public Services', '2018-09-01', '2019-06-01', false, 'United Kingdom', 'Onsite'),
    (gen_random_uuid(), 'a0000000-0000-0000-0000-000000000002', 'Teacher', 'Education', '2019-06-01', '2022-06-01', false, 'United Kingdom', 'Onsite'),
    (gen_random_uuid(), 'a0000000-0000-0000-0000-000000000002', 'Author', 'Publishing', '2022-07-01', NULL, true, 'United Kingdom', 'Hybrid');


INSERT INTO tags (tag_id, name)
VALUES
    ('c0000000-0000-0000-0000-000000000001', 'tech'),
    ('c0000000-0000-0000-0000-000000000002', 'career change'),
    ('c0000000-0000-0000-0000-000000000003', 'self taught');

INSERT INTO story_tags (story_id, tag_id)
VALUES
    ('b0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001'),
    ('b0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002'),
    ('b0000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000001'),
    ('b0000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000003');

COMMIT;