import { useEffect, useState } from "react";

type Movie = {
  id: number;
  title: string;
  poster: string;
  genre?: string;
  director?: string;
  cast?: string;
  country?: string;
  premiere?: string;
  description: string;
  trailer: string;
  trailerThumbnail: string;

};

const movies: Movie[] = [
  {
    id: 1,
    title: "GRINCH",
    poster: "/images/grinch.jpg",
    genre: "Фантастика, Приключения",
    director: "Доктор Сьюз",
    cast: "Джим Керри",
    country: "США",
    premiere: "1955",
    description:
      "это история о зелёном, угрюмом существе, живущем в пещере над Ктогородом, которое ненавидит Рождество и решает украсть праздник у его радостных жителей, но в итоге понимает истинный смысл Рождества благодаря маленькой девочке Синди-Лу, переосмысливая своё одиночество и обиды.",
    trailer: "https://www.youtube.com/embed/VIDEO_ID_1",
    trailerThumbnail: "/images/Grinch-trailer.jpg",

  },
  {
    id: 2,
    title: "Мистер и Мисс Смит",
    poster: "/images/mr.mrs.jpg",
    genre: "Боевик, Комедия, Триллер",
    director: "Даг Лайман",
    cast: "Бред Питт, Анджелина Джоли, Винс Вонн",
    country: "США",
    premiere: "2005",
    description:
      "история о супружеской паре (Джон и Джейн), которые в обычной жизни скучают в своем браке, но на самом деле являются тайными киллерами, работающими на враждующие организации, и получают задание... друг друга ликвидировать, что приводит к захватывающему экшену, юмору и развитию их отношений.",
    trailer: "https://www.youtube.com/embed/VIDEO_ID_2",
    trailerThumbnail: "/images/mrsmith-trailer.jpg",

  },
  {
    id: 3,
    title: "Отпуск по обмену",
    poster: "/images/otpysk.jpg",
    genre: "Мелодрама",
    director: "Нэнси Майерс",
    cast: "Кэмерон Диас, Джуд Лоу, Кейт Уинслет, Джек Блэк",
    country: "США",
    premiere: "2006",
    description:
      "американская романтическая комедия 2006 года от режиссёра Нэнси Майерс о двух женщинах, Аманде из Калифорнии и Айрис из Лондона, которые, переживая неудачи в любви, меняются домами на Рождество и находят там новую любовь, попадая в сказочные, уютные истории в незнакомых местах. ",
    trailer: "https://www.youtube.com/watch?v=8ubDlWSux4w",
    trailerThumbnail: "/images/trailer-holiday.jpg",

  },
];

export default function MovieDetails() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [playTrailer, setPlayTrailer] = useState(false);

  useEffect(() => {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    setMovie(randomMovie);
    setPlayTrailer(false);
  }, []);

  if (!movie) return null;


  const info = (value?: string) => (value && value.trim() ? value : "—");

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={movie.poster} alt={movie.title} style={styles.poster} />

        <div style={styles.info}>
          <h1 style={{ marginTop: 0 }}>{movie.title}</h1>

          <div style={styles.grid}>
            <p><b>Жанр:</b> {info(movie.genre)}</p>
            <p><b>Режиссёр:</b> {info(movie.director)}</p>
            <p><b>В ролях:</b> {info(movie.cast)}</p>
            <p><b>Страна:</b> {info(movie.country)}</p>
            <p><b>Премьера:</b> {info(movie.premiere)}</p>
          </div>

          <button style={styles.button}>КУПИТЬ БИЛЕТ</button>
        </div>
      </div>

      <h2 style={{ marginTop: 24 }}>Описание фильма</h2>
      <p style={{ lineHeight: 1.6, maxWidth: 900 }}>{movie.description}</p>

      <div style={{ marginTop: 20 }}>
        <div style={{ marginTop: 20 }}>
  {!playTrailer ? (
    <div
      style={styles.trailerPreview}
      onClick={() => setPlayTrailer(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setPlayTrailer(true)}
      title="Нажмите, чтобы запустить трейлер"
    >
      <img
        src={movie.trailerThumbnail}
        alt="Трейлер"
        style={styles.trailerImage}
      />
      <div style={styles.playButton}>▶</div>
    </div>
  ) : (
    <iframe
      width="100%"
      height="420"
      src={movie.trailer + "?autoplay=1"}
      title="Трейлер"
      allow="autoplay; encrypted-media"
      allowFullScreen
      style={styles.iframe}
    />
  )}
</div>

      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    background: "#0f172a",
    color: "#fff",
    padding: "24px",
    minHeight: "100vh",
    fontFamily: "Arial",
  },
  header: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  poster: {
    width: "260px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  info: {
    flex: 1,
    minWidth: "280px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "6px",
    marginTop: "12px",
  },
  button: {
    marginTop: "14px",
    padding: "12px 26px",
    background: "#ec4899",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 700,
  },
  iframe: {
    border: "none",
    borderRadius: "10px",
  },
};
