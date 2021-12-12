import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <h1>Hello React Testing Library</h1>
            <Link to="about">About</Link>
            <Link to="events">Events</Link>
            <Link to="contact">Contact</Link>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    );
}

export function Services() {
    return (
        <div>
            <h1>Our Services</h1>
        </div>
    );
}

export function CompanyHistory() {
    return (
        <div>
            <h1>Our History</h1>
        </div>
    );
}

export function Location() {
    return (
        <div>
            <h1>Our Location</h1>
        </div>
    );
}

export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}

export function Whoops404() {
    const location = useLocation();

    return <h1>Resource not found at {location.pathname}</h1 >
}