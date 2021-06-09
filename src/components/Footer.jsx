import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-light text-dark-50">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                        <small>Developed By &copy; Arman Shahriar</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                            <a href="https://www.facebook.com/Unrevealed.ASR">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a href="https://www.linkedin.com/in/arman-shahriar">
                                <FaLinkedin className="connect text-dark" /></a>
                            <a href="https://www.instagram.com/as.rishad/">
                                <AiFillInstagram className="connect text-dark" /></a>
                            <a href="https://www.youtube.com/channel/UCabHqF7SRUfYzebP3WKj4ZA?view_as=subscriber">
                                <IoLogoYoutube className="connect text-dark" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer