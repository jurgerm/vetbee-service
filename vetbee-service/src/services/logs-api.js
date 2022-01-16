const API_URL = "http://localhost:8081/v1";

export class LogsApi {
  static async all(petId) {
    const res = await fetch(
      `${API_URL}/logs/${petId}`,
      {
        method: "GET",
        headers: {
          //  authorization: `Bearer ${token}` 
        }
      }
    );

    return res.json();
  }

  static async add(log) {
    if (!log) throw new Error("No argument");

    const res = await fetch(
      `${API_URL}/logs`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(log),
      }
    );

    return res.json();
  }

  static async delete(id) {
    if (!id) throw new Error("No argument");

    const res = await fetch(
      `${API_URL}/logs/${id}`,
      {
        method: "DELETE",
      }
    );

    return res.json();
  }

  static async update(id, updatedLog) {
    if (!id || !updatedLog) {
      throw new Error("Missing arguments");
    }

    const res = await fetch(
      `${API_URL}/logs/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedLog),
      }
    );

    return res.json();
  }
}
