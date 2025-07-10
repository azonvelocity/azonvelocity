import React from "react";

export default function HomePage() {
  return (
    <div className="container">
      <img src="/favicon.ico" alt="AzonVelocity Logo" className="logo" />
      <h1>Welcome to AzonVelocity</h1>
      <p>See how fast your Amazon product will sell using sales rank and category.</p>
      <form action="https://sheetdb.io/api/v1/YOUR_SHEETDB_ENDPOINT" method="POST">
        <input type="text" name="data[Name]" placeholder="Name" required /><br /><br />
        <input type="email" name="data[Email]" placeholder="Email" required /><br /><br />
        <input type="text" name="data[Phone]" placeholder="Phone Number" required /><br /><br />
        <button type="submit">Register & Use Tool</button>
      </form>
    </div>
  );
}