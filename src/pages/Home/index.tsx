import React from 'react';
import {Grid} from '@material-ui/core';

import {Tabs} from '../../components/common';
import {About, Links} from './types';

import useStyles from './styles';
import {useJsonStyles} from '../../styles';

import data from '../../db/about.json';
import resume_data from '../../db/resume.json';
import ProfilePic from '../../assets/ProfilePic.jpg';
import {Education, Experience, Skills} from "../Personal/types";

const Home: React.FC = () => {
    const classes = useStyles();
    const jsonClasses = useJsonStyles();
    const {links}: { about: About; links: Links } = data;
    const {
        education,
        experiences,
        skills,
    }: {
        education: Education;
        experiences: Experience[];
        skills: Skills;
    } = resume_data;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <img className={classes.pic} src={ProfilePic} alt=""/>

                {/* Responsive JSON wrapper */}
                <div className={classes.codeBlock}>
                    <Tabs count={2}/>
                    {'{\n'}
                    <Tabs count={3}/>"<span className={jsonClasses.page}>LinkedIn</span>"
                    <span className={jsonClasses.code}>: </span>"
                    <span className={jsonClasses.text}>
            <a
                className={jsonClasses.text}
                href={links.GitHub.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
              {links.GitHub.linkName}
            </a>
          </span>
                    "<span className={jsonClasses.code}>,</span>
                    {'\n'}
                    <Tabs count={3}/>"<span className={jsonClasses.page}>GitHub</span>"
                    <span className={jsonClasses.code}>: </span>"
                    <span className={jsonClasses.text}>
            <a
                className={jsonClasses.text}
                href={links.LinkedIn.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
              {links.LinkedIn.linkName}
            </a>
          </span>

                    "<span className={jsonClasses.code}>,</span>{'\n'}
                    <Tabs count={3}/>"<span className={jsonClasses.page}>Telegram</span>"
                    <span className={jsonClasses.code}>: </span>"
                    <span className={jsonClasses.text}>
            <a
                className={jsonClasses.text}
                href={links.Telegram.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
              {links.Telegram.linkName}
            </a>
          </span>
                    ",{'\n'}
                    <Tabs count={3}/>"<span className={jsonClasses.page}>Email</span>"
                    <span className={jsonClasses.code}>: </span>"
                    <span className={jsonClasses.text}>
            <a
                className={jsonClasses.text}
                href={links.Email.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
              {links.Email.linkName}
            </a>
          </span>
                    ",{'\n'}
                    <Tabs count={3}/>"<span className={jsonClasses.page}>Phone</span>"
                    <span className={jsonClasses.code}>: </span>"
                    <span className={jsonClasses.text}>
            <a
                className={jsonClasses.text}
                href={links.Phone}
                target="_blank"
                rel="noopener noreferrer"
            >
              {links.Phone}
            </a>
          </span>
                    ",{'\n'}
                    <Tabs count={3}/>"<span className={jsonClasses.page}>Location</span>"
                    <span className={jsonClasses.code}>: </span>"
                    <span className={jsonClasses.text}>

              {links.Location}
          </span>
                    "{'\n'}
                    <Tabs count={2}/>
                    {'}'}
                </div>
            </Grid>

            <Grid item xs={12} md={7}>
                {/* Responsive JSON wrapper */}
                <div className={classes.codeBlock}>
            {'{\n'}
            {/* Education */}

                <Tabs/>"<span className={jsonClasses.page}>Education</span>"
                <span className={jsonClasses.code}>: </span>
                {'{\n'}
                <Tabs count={2}/>"
                <span className={jsonClasses.project}>{education.institution}</span>"
                <span className={jsonClasses.code}>: </span>
                {'{\n'}
                <Tabs count={3}/>"<span className={jsonClasses.info}>degree</span>"
                <span className={jsonClasses.code}>: </span>"
                <span className={jsonClasses.text}>{education.degree}</span>"
                <span className={jsonClasses.code}>,</span>
                {'\n'}
                <Tabs count={3}/>"<span className={jsonClasses.info}>program</span>"
                <span className={jsonClasses.code}>: </span>"
                <span className={jsonClasses.text}>{education.program}</span>"
                <span className={jsonClasses.code}>,</span>
                {'\n'}
                <Tabs count={3}/>"<span className={jsonClasses.info}>duration</span>"
                <span className={jsonClasses.code}>: </span>"
                <span className={jsonClasses.text}>{education.duration}</span>"{'\n'}
                <Tabs count={2}/>
                {'}\n'}
                <Tabs/>
                {'}'}
                <span className={jsonClasses.code}>,</span>
                {'\n'}
                {/* Experience */}
                <Tabs/>"<span className={jsonClasses.page}>Experience</span>"
                <span className={jsonClasses.code}>: </span>
                {'{\n'}
                {experiences.map((experience, i) => (
                    <React.Fragment key={i}>
                        <Tabs count={2}/>"
                        <span className={jsonClasses.project}>{experience.position}</span>"
                        <span className={jsonClasses.code}>: </span>
                        {'{\n'}
                        <Tabs count={3}/>"<span className={jsonClasses.info}>duration</span>"
                        <span className={jsonClasses.code}>: </span>"
                        <span className={jsonClasses.text}>{experience.duration}</span>"
                        <span className={jsonClasses.code}>,</span>
                        {'\n'}
                        <Tabs count={3}/>"<span className={jsonClasses.info}>location</span>"
                        <span className={jsonClasses.code}>: </span>"
                        <span className={jsonClasses.text}>{experience.location}</span>"{'\n'}
                        <Tabs count={2}/>
                        {'}'}
                        {i !== experiences.length - 1 && (
                            <span className={jsonClasses.code}>,</span>
                        )}
                        {'\n'}
                    </React.Fragment>
                ))}
                <Tabs/>
                {'}'}
                <span className={jsonClasses.code}>,</span>
                {'\n'}
                {/* Skills */}
                <Tabs/>"<span className={jsonClasses.page}>Skills</span>"
                <span className={jsonClasses.code}>: </span>
                {'{\n'}
                {Object.keys(skills).map((skillCategory, i) => (
                    <React.Fragment key={i}>
                        <Tabs count={2}/>"
                        <span className={jsonClasses.project}>{skillCategory}</span>"
                        <span className={jsonClasses.code}>: </span>[{'\n'}

                        {skills[skillCategory].map((skill, j) => (
                            <React.Fragment key={j}>
                                <Tabs count={3}/>"
                                <span className={jsonClasses.text}>{skill}</span>"
                                {j !== skills[skillCategory].length - 1 && (
                                    <span className={jsonClasses.code}>,</span>
                                )}
                                {'\n'}
                            </React.Fragment>
                        ))}

                        <Tabs count={2}/>]

                        {i !== Object.keys(skills).length - 1 && (
                            <>
                                <span className={jsonClasses.code}>,</span>
                                {'\n'}
                            </>
                        )}
                    </React.Fragment>

                ))}

                <Tabs/>
            {'\n}\n}'}
            </div>
            </Grid>
        </Grid>
    );
};

export default Home;
