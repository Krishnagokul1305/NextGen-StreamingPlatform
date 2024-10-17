import { API_BASE_URL } from "../config";

const API_AUTH = `${API_BASE_URL}/auth`;

async function login_api({ username, password }) {
  try {
    console.log(username, password);
    const res = await fetch(`${API_AUTH}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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

async function signUp_api({username, name, email, password}) {
  try {
console.log(username, name, email, password);
    const res = await fetch(`${API_AUTH}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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

async function forgotPassword_api(email) {
  try {
    const res = await fetch(`${API_AUTH}/forgot-password`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(email),
    });
    if (!res.ok) {
      throw new Error("Failed to send email");
    }
    const data = await res.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function resetPassword_api(passwordData) {
  try {
    console.log(passwordData);
    const res = await fetch(`${API_AUTH}/reset-password`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(passwordData),
    });
    if (!res.ok) {
      throw new Error("Failed to reset password");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function checkUserName_api(username) {
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

async function checkEmail_api(email) {
  try {
    const res = await fetch(`${API_AUTH}/check-email/${email}`);
    if (!res.ok) {
      throw new Error("Failed to check email");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export {
  forgotPassword_api,
  resetPassword_api,
  login_api,
  signUp_api,
  checkUserName_api,
  checkEmail_api,
};
