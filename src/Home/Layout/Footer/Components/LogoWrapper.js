import React, { Component } from "react";

class LogoWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mappInfo: {
                facebook: {
                    url: 'http://facebook.com/pntkorea/',
                    title: 'Facebook'
                },
                linkedin: {
                    url: 'https://www.linkedin.com/company/10515964/',
                    title: 'Linkedin'
                },
                youtube: {
                    url: 'https://www.youtube.com/channel/UCjta-QWjrvGLDS_BpyV3C2w',
                    title: 'Youtube'
                },
                rss: {
                    url: 'https://www.slideshare.net/AntonioHong',
                    title: 'Rss'
                },
                twitter: {
                    url: 'https://twitter.com/IndoorPlus',
                    title: 'Twitter'
                },
                tumblr: {
                    url: 'https://tech-people.github.io/',
                    title: 'Tumblr'
                },
            },
            sns: this.props.sns
        };
    }
    render() {
        const {
            mappInfo,
            sns
        } = this.state;
        const info = mappInfo[sns];
        return (
            <a className={'ml-2'} target="_blank" aria-hidden={true} href={info.url} title={info.title}>
                {this.props.children}
            </a>
        );
    }
}

export default LogoWrapper;