const API_URL = "http://localhost:8081/v1";

export class MedsApi {
  static async all(token) {
    const res = await fetch(
      `${API_URL}/meds`,
      {
        method: "GET",
        headers: {
          //  authorization: `Bearer ${token}` 
        }
      }
    );

    return res.json();
  }

  static async add(medication) {
    if (!medication) throw new Error("No argument");

    const res = await fetch(
      `${API_URL}/meds`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(medication),
      }
    );

    return res.json();
  }

  static async delete(id) {
    if (!id) throw new Error("No argument");

    const res = await fetch(
      `${API_URL}/meds/${id}`,
      {
        method: "DELETE",
      }
    );

    return res.json();
  }

  static async update(id, update) {
    if (!id || !update) {
      throw new Error("Missing arguments");
    }

    const res = await fetch(
      `${API_URL}/meds/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
      }
    );

    return res.json();
  }
}
