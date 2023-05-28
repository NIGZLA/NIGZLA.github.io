function showLoginPopup() {
    var loginPopup = document.getElementById("loginPopup");
    loginPopup.style.opacity = "1";
    loginPopup.style.pointerEvents = "auto";
  }

  // 关闭登录弹窗
  function closeLoginPopup() {
    var loginPopup = document.getElementById("loginPopup");
    loginPopup.style.opacity = "0";
    loginPopup.style.pointerEvents = "none";
  }

  function showLoginOther() {
    var loginPopup = document.getElementById("loginOther");
    loginPopup.style.opacity = "1";
    loginPopup.style.pointerEvents = "auto";
  }

  // 关闭登录弹窗
  function closeLoginOther() {
    var loginPopup = document.getElementById("loginOther");
    loginPopup.style.opacity = "0";
    loginPopup.style.pointerEvents = "none";
  }