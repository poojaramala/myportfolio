/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting the form
      - `email` (text) - Email address for contact
      - `message` (text) - Message content from the form
      - `created_at` (timestamptz) - Timestamp of submission
      - `read` (boolean) - Whether the message has been read (default false)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for public insert (anyone can submit a contact form)
    - No public read/update/delete access (only owner can manage via dashboard)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);