import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [showSchedule, setShowSchedule] = useState(false);

  const handleToggle = () => {
    setShowSchedule((prev) => !prev);
  };

  return (
    <div className="about-page">
      <h1>About Cricket Blog</h1>
      <p>
        Welcome to the Cricket Blog! Here you’ll find updates, stories, and player insights from the world of cricket. Stay tuned for match schedules, player stats, and more.
      </p>

      <div className="update-section">
        <button onClick={handleToggle} className="toggle-btn">
          {showSchedule ? "🔙 Back to Updates" : "📅 Show Match Schedule"}
        </button>

        {showSchedule ? (
          <div className="schedule-table animated">
            <h2>India vs England 2025 - Test Match Series</h2>
            <table>
              <thead>
                <tr>
                  <th>Match</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Venue</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st Test</td>
                  <td>10 July 2025</td>
                  <td>10:00 AM GMT</td>
                  <td>Lord's, London</td>
                  <td>Upcoming</td>
                </tr>
                <tr>
                  <td>2nd Test</td>
                  <td>18 July 2025</td>
                  <td>10:00 AM GMT</td>
                  <td>Trent Bridge, Nottingham</td>
                  <td>Upcoming</td>
                </tr>
                <tr>
                  <td>3rd Test</td>
                  <td>26 July 2025</td>
                  <td>10:00 AM GMT</td>
                  <td>Headingley, Leeds</td>
                  <td>Upcoming</td>
                </tr>
                <tr>
                  <td>4th Test</td>
                  <td>3 August 2025</td>
                  <td>10:00 AM GMT</td>
                  <td>The Oval, London</td>
                  <td>Upcoming</td>
                </tr>
                <tr>
                  <td>5th Test</td>
                  <td>11 August 2025</td>
                  <td>10:00 AM GMT</td>
                  <td>Edgbaston, Birmingham</td>
                  <td>Upcoming</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="latest-highlights">
  <h2>🏏 Latest Cricket Highlights</h2>
  <div className="highlight-cards">
    <div className="highlight-card">
      <span className="emoji">🔥</span>
      <p><strong>Karun Nair</strong> returns for the England tour!</p>
    </div>
    <div className="highlight-card">
      <span className="emoji">🧤</span>
      <p><strong>Rishab-Pant</strong> Vice-Captain to lead the Squard for Test series.</p>
    </div>
    <div className="highlight-card">
      <span className="emoji">🏆</span>
      <p><strong>Gill</strong> to lead the squad for Test series.</p>
    </div>
  </div>
</div>
        )}
      </div>
    </div>
  );
};

export default About;
