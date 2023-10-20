const userLogin = document.getElementById("user");
const data = localStorage.getItem("user");
const user = JSON.parse(data);

if (data === null) {
  userLogin.innerHTML = `<div class="d-flex gap-2 autentikasi">
  <div class="login">
    <a href="login.html" class="btn btn-sm btn-outline-success px-3"
      >Login</a
    >
  </div>
  <div class="daftar">
    <a href="register.html" class="btn btn-sm btn-success px-3"
      >Daftar</a
    >
  </div>
</div>`;
} else {
  userLogin.innerHTML = `<div class="user dropdown">
  <i class="bx bx-user-circle fs-4"></i>
  <span
    class="dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    id="user"
  >${user.email}</span>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" style="color: #66d37e" href="#"
        >Dashboard</a
      >
    </li>
    <li>
      <a
        class="dropdown-item"
        style="color: #66d37e"
        href="layanan.html"
        >Layanan</a
      >
    </li>
    <li>
      <a class="dropdown-item" style="color: #66d37e" href="#">
        Data &raquo;
      </a>
      <ul
        class="dropdown-menu dropdown-submenu dropdown-submenu-left"
      >
        <li>
          <a class="dropdown-item" style="color: #66d37e" href="#"
            >Data Pasien</a
          >
        </li>
        <li>
          <a class="dropdown-item" style="color: #66d37e" href="#"
            >Data Dokter</a
          >
        </li>
        <li>
          <a class="dropdown-item" style="color: #66d37e" href="#"
            >Data Poliklinik</a
          >
        </li>
        <li>
          <a class="dropdown-item" style="color: #66d37e" href="#"
            >Data Rekam Medis</a
          >
        </li>
      </ul>
    </li>
    <li>
      <a
        class="dropdown-item"
        style="color: #66d37e"
        href="index.html"
        id="logout"
        >Logout</a
      >
    </li>
  </ul>
</div>`;
}

const userLogout = document.getElementById("logout");
userLogout.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("user");
  window.location.href = "index.html";
});
