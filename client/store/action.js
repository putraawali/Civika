const SERVER_URL = "http://54.166.32.106:3000";
export const SET_EXPO_PUSH_TOKEN = "expoPushToken/setExpoPushToken";
export const SET_ANNOUNCEMENT = "announcement/setAnnouncement";
export const SET_ANNOUNCEMENT_LOADING = "announcement/setAnnouncementLoading";
export const SET_STUDENTS = "students/setStudents";
export const SET_LECTURE = "lecture/setLecture";
export const SET_LECTURE_ERR = "lectureErr/setLectureErr";
export const SET_LECTURE_LOADING = "lectureLoading/setLectureLoading";
export const SET_TOKEN = "token/setToken";
export const SET_TOKEN_ERR = "tokenErr/setTokenErr";
export const SET_TOKEN_LOADING = "tokenLoading/setTokenLoading";
export const SET_USER = "user/setUser";
export const SET_USER_ERR = "userErr/setUserErr";
export const SET_USER_LOADING = "userLoading/setUserLoading";
export const SET_CLASS = "class/setClass";

export function setUser(payload) {
  return { type: SET_USER, payload };
}
export function setToken(payload) {
  return { type: SET_TOKEN, payload };
}
export function setLecture(payload) {
  return { type: SET_LECTURE, payload };
}

export function login(payload) {
  return function (dispatch) {
    dispatch({ type: SET_TOKEN_LOADING, payload: true });
    return fetch(`${SERVER_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  };
}

export function fetchUser(id, token) {
  return function (dispatch) {
    dispatch({ type: SET_USER_LOADING, payload: true });
    fetch(`${SERVER_URL}/users/` + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        dispatch({ type: SET_USER, payload: user });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch({ type: SET_USER_LOADING, payload: false });
      });
  };
}

export function editUser(payload, token) {
  return function (dispatch) {
    dispatch({ type: SET_USER_LOADING, payload: true });
    return fetch(`${SERVER_URL}/users/edit?id=` + +payload.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
      body: JSON.stringify(payload),
    });
  };
}

export function sendPayment(payload, token, id) {
  return function () {
    return fetch(`${SERVER_URL}/users/${+id}/genDuitkuLink`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
      body: JSON.stringify({ method: payload.value }),
    });
  };
}

export function fetchLecture(access_token, dataUser) {
  let conditionUrl;
  if (dataUser.role === "student") {
    conditionUrl = `${SERVER_URL}/class/user/${dataUser.id}`;
  } else {
    conditionUrl = `${SERVER_URL}/lectures/`;
  }

  return function (dispatch) {
    dispatch({ type: SET_LECTURE_LOADING, payload: true });
    fetch(conditionUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token,
      },
    })
      .then((res) => res.json())
      .then((lecture) => {
        dispatch({ type: SET_LECTURE, payload: lecture });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch({ type: SET_LECTURE_LOADING, payload: false });
      });
  };
}

export function getClassStudents(lectureId, token) {
  return function () {
    return fetch(`${SERVER_URL}/class/lecture/${lectureId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    });
  };
}

export function deleteAnnouncementById(id, token) {
  return function () {
    return fetch(`${SERVER_URL}/announcement/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    });
  };
}

export function addAnnouncement(payload, token) {
  return function () {
    return fetch(`${SERVER_URL}/announcement`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
      body: JSON.stringify(payload),
    });
  };
}

export function fetchAnnouncement(token) {
  return function (dispatch) {
    dispatch({ type: SET_ANNOUNCEMENT_LOADING, payload: true });
    return fetch(`${SERVER_URL}/announcement/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: SET_ANNOUNCEMENT, payload: data });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch({ type: SET_ANNOUNCEMENT_LOADING, payload: false });
      });
  };
}

export function fetchAnnouncementTeacher(token) {
  return function (dispatch) {
    dispatch({ type: SET_ANNOUNCEMENT_LOADING, payload: true });
    return fetch(`${SERVER_URL}/announcement/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    });
  };
}

export function addKRS(payload, token) {
  return function () {
    return fetch(`${SERVER_URL}/classes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
      body: JSON.stringify({ LectureId: payload }),
    });
  };
}

export function fetchKRS(token) {
  return function (dispatch) {
    fetch(`${SERVER_URL}/krs/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((classes) => {
        dispatch({ type: SET_CLASS, payload: classes });
      })
      .catch((err) => console.log(err));
  };
}

export function logoutUser(access_token) {
  return function () {
    return fetch(`${SERVER_URL}/logout`, {
      headers: {
        "Content-type": "application/json",
        access_token,
      },
    });
  };
}
