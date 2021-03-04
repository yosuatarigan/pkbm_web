import React from 'react';

const Header = () => {
    return (
        <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">

                <h1 class="logo mr-auto"><a href="index.html">PKBM HANUBA</a></h1>

      <nav class="nav-menu d-none d-lg-block">
                        <ul>
                            <li class="active"><a href="index.html">Home</a></li>
                            <li><a href="#artikel">Artikel</a></li>
                            <li><a href="#kegiatan">Kegiatan</a></li>
                            <li><a href="#fasilitas">Fasilitas</a></li>
                            <li><a href="#tutor">Tutor</a></li>
                            <li><a href="#alumni">Alumni</a></li>
                            <li><a href="https://setara.kemdikbud.go.id">Setara Daring</a></li>
                            <li><a href="#admin">Admin</a></li>
                            <li><a href="#info">Info</a></li>

                        </ul>
                    </nav>

    </div>
  </header>
    )
}

export default Header;