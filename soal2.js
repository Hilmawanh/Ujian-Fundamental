// User & Login
class User {
  constructor(a, b, c) {
    (this.nama = a), (this.katasandi = b), (this.role = c);
  }
}

var dataUser = [
  new User("hilmawan", "0211", "user"),
  new User("hafidzi", "1234", "admin")
];

var dataUserLogin = {};

const loginClick = () => {
  var userlogin = document.getElementById("nama").value;
  var sandilogin = document.getElementById("katasandi").value;
  var login = false;
  for (var i = 0; i < dataUser.length; i++) {
    if (userlogin == dataUser[i].nama && sandilogin == dataUser[i].katasandi) {
      login = true;
      dataUserLogin = dataUser[i];
    }
  }
  if (login) {
    document.getElementsByTagName(
      "h2"
    )[0].innerHTML = `Selamat datang user : ${dataUserLogin.nama}`;
    if (dataUserLogin.role == "admin") {
      document.getElementsByTagName(
        "h2"
      )[0].innerHTML = `Selamat datang Admin : ${dataUserLogin.nama}`;
      document.getElementsByTagName(
        "h1"
      )[1].innerHTML = `Apa yang ingin anda ubah?`;
      document.getElementsByTagName("p")[i].innerHTML = `<table>
        <thead>
          <tr>
              <td>NO</td>
              <td>KEGIATAN</td>
              <td>HARI</td>
              <td>POSTER</td>
              <td>ACT</td>
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot>
        <tr>
          <td><input class="addmadding" /></td>
          <td><input type="text" class='addmadding' /><td>
          <td><input type="text" class='addmadding' /></td>
          <td><input type=</td>
        </tr>
        </tfoot>
        </table>`;
      printProdukAdmin(listdata);
    } else {
      document.getElementsByTagName("h1")[1].innerHTML = ``;
      document.getElementsByTagName("p")[1].innerHTML = `<table>
        <thead>
          <tr>
              <td>NO</td>
              <td>KEGIATAN</td>
              <td>HARI</td>
              <td>POSTER</td>
              <td>ACT</td>
          </tr>
        </thead>
        <tbody></tbody>
        </table>`;
      document.getElementsByTagName("h3")[0].innerHTML = ``;
      printKegiatan(listdata);
    }
    document.getElementsByTagName(
      "p"
    )[0].innerHTML = `<button onclick="logoutuser()">Logout</button>`;
    document.getElementById("divlogin").innerHTML = "";
  } else {
    document.getElementsByTagName(
      "h2"
    )[0].innerHTML = `User tidak ditemukan atau password salah.`;
  }
};

const logoutuser = () => {
  dataUserLogin = {};
  document.getElementsByTagName("h2")[0].innerHTML = "";
  document.getElementsByTagName("h3")[0].innerHTML = "";
  document.getElementsByTagName("p")[0].innerHTML = ``;
  document.getElementById("divlogin").innerHTML = `<h1>Login</h1
      <span>Username: <input type"text" id="nama"</span> <br><br>
      <span>Password: <input type="password" id"katasandi"></span><br><br>
     <button onclick="loginClick()">Login</button>`;
  document.getElementsByTagName("h1")[1].innerHTML = ``;
  document.getElementsByTagName("p")[1].innerHTML = ``;
  document.getElementsByTagName("h3")[0].innerHTML = ``;
};
// Batas Login

class List {
  constructor(a, b, c, d, e) {
    this.No = a;
    this.Kegiatan = b;
    this.Hari = c;
    this.Poster = d;
    this.Act = e;
  }
}

var listdata = [
  new List(
    "1",
    "Mancing",
    "Senin",
    "https://i2.wp.com/pengusahamuslim.com/wp-content/uploads/2014/04/usaha-wisata-mancing-ikan-laut-565.jpg?fit=1600%2C1064&ssl=1",
    ""
  ),
  new List(
    "2",
    "Balapan",
    "Selasa",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5e3I5dQDyV5-ZSZ_R8z9udPwiQF8Ym9PRTZXSOnVQ8QHE-IE&s",
    ""
  ),
  new List(
    "3",
    "Pesta",
    "Rabu",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKizMR7SfGxsz6VKyAzz-ImaYN228nZDxRIUpJtXD042ymJnraw&s",
    ""
  )
];
const printKegiatan = a => {
  var output = "";
  a.forEach(val => {
    output += `<tr>
          <td>${val.No}</td>
          <td>${val.Kegiatan}</td>
          <td>${val.Hari}</td>
          <td><img src=${val.gambar} height="100px"/></td>
          <td>${val.Act}</td>
          </tr>`;
  });
  document.getElementsByTagName("tbody")[0].innerHTML = output;
};

const printKegiatanAdmin = () => {
  var output = "";
  a.forEach((val, index) => {
    output += `<tr>
        <td>${val.No}</td>
        <td>${val.Kegiatan}</td>
        <td>${val.Hari}</td>
        <td><img src=${val.Poster} height="100px"</td>
        <td>
            <button class="addcart" onclick="DeleteClick(${index})">Delete</button>
            <button class="addcart" onclick="EditClick(${index})">Edit</button>
        </td>
        </tr>`;
  });
  document.getElementById("tbody")[0].innerHTML = output;
};
const DeleteClick = index => {
  var checkDelete = confirm("Yakin ingin delete produk ini?");
  var head = "";
  if (checkDelete == true) {
    listdata.splice(index, 1);
  }
  printProdukAdmin(listdata);
};

const EditClick = index => {
  var editNo = prompt("Masukan No");
  var editKegiatan = parseInt(prompt("Masukan Kegiatan"));
  var editHari = prompt("Masukan Hari");
  var editPoster = prompt("Masukan gambar url");

  listdata[index].produk = editNo;
  listdata[index].harga = editKegiatan;
  listdata[index].gambar = editHari;
  listdata[index].gambar = editPoster;
  printProdukAdmin(listdata);
};

const addmadding = () => {
  var addcheck = confirm("Anda yakin ingin menambah kegiatan ini?");
  if (addcheck == true) {
    var input = document.getElementsByClassName("addmadding");
    var produkBaru = input[0].value;
    var hargaBaru = parseInt(input[1].value);
    var gambarBaru = input[2].value;
    listdata.push(new List(produkBaru, hargaBaru, gambarBaru));
  }
  printKegiatan(listdata);
};
