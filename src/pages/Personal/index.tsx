import React from 'react';

import {Tabs} from '../../components/common';

import {useJsonStyles} from '../../styles';

import data from '../../db/about.json';
import {About, Links} from "../Home/types";

const Personal: React.FC = () => {
    const classes = useJsonStyles();
    const jsonClasses = useJsonStyles();
    const {about}: { about: About; links: Links } = data;

    return (
        <>
        <div className={classes.codeBlock}>
                    {'{\n'}
                    <Tabs/>"<span className={jsonClasses.project}>I am</span>"
                    <span className={jsonClasses.code}>: </span>"
                    <span className={jsonClasses.text}>{about.position}</span>"
                    <span className={jsonClasses.code}>,</span>
                    {'\n'}
                    <Tabs/>"<span className={jsonClasses.project}>Studying at</span>"
                    <span className={jsonClasses.code}>: </span>"
                    <span className={jsonClasses.text}>{about.school}</span>"
                    <span className={jsonClasses.code}>,</span>
                    {'\n'}
                    <Tabs/>"<span className={jsonClasses.project}>Currently</span>"
                    <span className={jsonClasses.code}>: </span>"
                    <span className={jsonClasses.text}>{about.status}</span>"
                    <span className={jsonClasses.code}>,</span>
                    {'\n'}
                    <Tabs/>"<span className={jsonClasses.project}>I enjoy</span>"
                    <span className={jsonClasses.code}>: </span>[
                    {about.interests.map((interest, i) => (
                        <React.Fragment key={i}>
                            {'\n'}
                            <Tabs count={2}/>"
                            <span className={jsonClasses.text}>{interest}</span>"
                            {i !== about.interests.length - 1 && (
                                <span className={jsonClasses.code}>,</span>
                            )}
                        </React.Fragment>
                    ))}
                    {'\n'}
                    <Tabs/>"<span className={jsonClasses.project}>My achievements</span>"
                    <span className={jsonClasses.code}>: </span>[
                    {about.achievements.map((achievements, i) => (
                        <React.Fragment key={i}>
                            {'\n'}
                            <Tabs count={2}/>"
                            <span className={jsonClasses.text}>{achievements}</span>"
                            {i !== about.achievements.length - 1 && (
                                <span className={jsonClasses.code}>,</span>
                            )}
                        </React.Fragment>
                    ))}
                    {'\n'}
                    <Tabs/>]<span className={jsonClasses.code}>,</span>
                    {'\n'}
                    <Tabs/>"<span className={jsonClasses.project}>Languages</span>"
                    <span className={jsonClasses.code}>: </span>{
                    Object.entries(about.languages).map(([lang, info], i, arr) => (
                        <React.Fragment key={lang}>
                            {'\n'}
                            <Tabs count={2}/>"<span className={jsonClasses.text}>{lang}</span>"
                            <span className={jsonClasses.code}>: </span>"
                            <span className={jsonClasses.text}>{info.level}</span>"
                            {i !== arr.length - 1 && <span className={jsonClasses.code}>,</span>}
                        </React.Fragment>
                    ))}
                    {'\n}'}
                </div>
        </>
    );
};

export default Personal;
