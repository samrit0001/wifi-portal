// Profile.js
import React from 'react';


import './Profile1.css';
function Profile1() {
    return (
        <div class="ProfilePage">
            <div class="card" data-state="#about">
                <div class="card-header">
                    <div class="card-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')" }}></div>
                    <img class="card-avatar" src="./profilepic1.jpg" alt="avatar" />
                    <h1 class="card-fullname">Amrit</h1>
                    <h2 class="card-jobtitle">Software Engineer</h2>
                </div>
                <div class="card-main">
                    <div class="card-section is-active" id="about">
                        <div class="card-content">
                            <div class="card-subtitle">ABOUT</div>
                            <p class="card-desc">Software Engineer with 2 years experience. Great Cook
                            </p>
                        </div>
                        <div class="card-social">
                            <a href="https://www.linkedin.com/in/amrit-singh-a2517a171/"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                                <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                                <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" /></svg></a>
                            <a href="https://www.linkedin.com/in/amrit-singh-a2517a171/"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" /></svg></a>
                        </div>
                    </div>

                    <div class="card-buttons">
                        <button data-section="#about" class="is-active">ABOUT</button>
                        <button data-section="#experience">EXPERIENCE</button>
                        <button data-section="#contact">CONTACT</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Profile1;
