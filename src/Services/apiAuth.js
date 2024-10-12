import { API_BASE_URL } from "../config";

const API_AUTH = `${API_BASE_URL}/auth`;

async function login(username, password) {
  try {
    const res = await fetch(`${API_AUTH}/login`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to login");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}

async function signUp(username, name, email, password) {
  try {
    const res = await fetch(`${API_AUTH}/signup`, {
      method: "POST",
      body: JSON.stringify({
        username,
        name,
        email,
        password,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to sign up");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function forgotPassword(email) {
  try {
    const res = await fetch(`${API_AUTH}/forgot-password`, {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to send email");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function resetPassword(token, newPassword) {
  try {
    const res = await fetch(`${API_AUTH}/reset-password`, {
      method: "POST",
      body: JSON.stringify({
        token,
        newPassword,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to reset password");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function checkUserName(username) {
  try {
    const res = await fetch(`${API_AUTH}/check-username/${username}`);
    if (!res.ok) {
      throw new Error("Failed to check username");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { login, signUp, forgotPassword, resetPassword, checkUserName };
