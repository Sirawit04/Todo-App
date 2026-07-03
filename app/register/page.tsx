"use client";

import { useState } from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState("");

    return (
    <main>
      <h1>Register</h1>

      <label>Username</label>
      <br />
      <input />

      <br />
      <br />

      <label>Password</label>
      <br />
      <input />

      <br />
      <br />

      <label>Confirm Password</label>
      <br />
      <input />

      <br />
      <br />

      <button>Register</button>

    </main>
  );
}