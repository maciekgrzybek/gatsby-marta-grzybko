import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import SEO from './seo';

const PHOTO_URL =
  'https://images.ctfassets.net/gq2utkgxwoon/4Imairt5OuDtwRkJqjbFjC/8b1e2c211993608086522e0d6293c15f/moje_foto.jpg?w=668&h=1024&q=70&fm=webp';

const CvPage = ({ content, otherLang }) => (
  <>
    <SEO title={`CV - ${content.name}`} lang={content.lang} />

    <article className="post-content cv-page no-image">
      <div className="cv-layout">
        <aside className="cv-sidebar">
          <figure className="kg-card kg-image-card">
            <img src={PHOTO_URL} alt={content.name} className="kg-image" />
          </figure>

          <h4>{content.contactHeading}</h4>
          <ul className="contact-list">
            <li>
              <FontAwesomeIcon icon={faPhone} />
              {content.phone}
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              {content.email}
            </li>
          </ul>

          <h4>{content.techSkillsHeading}</h4>
          <ul>
            {content.techSkills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h4>{content.softSkillsHeading}</h4>
          <ul>
            {content.softSkills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h4>{content.languagesHeading}</h4>
          <ul>
            {content.languages.map(language => (
              <li key={language}>{language}</li>
            ))}
          </ul>

          <h4>{content.additionalHeading}</h4>
          <ul>
            {content.additional.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>

        <div className="cv-main post-content-body">
          <p>
            <strong>{content.role}</strong>
          </p>
          <h1>{content.name}</h1>
          <p>{content.intro}</p>

          <h2>{content.projectsHeading}</h2>
          <p>
            <a href={content.projectsUrl}>{content.projectsUrl}</a>
          </p>

          <h2>{content.experienceHeading}</h2>
          {content.experience.map(job => (
            <div key={job.company}>
              <h4>{job.company}</h4>
              <p>{job.period}</p>
              <ul>
                {job.bullets.map(bullet => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}

          <h2>{content.educationHeading}</h2>
          {content.education.map(entry => (
            <div key={entry.period}>
              <p>{entry.period}</p>
              <ul>
                <li>{entry.description}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  </>
);

export default CvPage;
