import { Alert, Button, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ISlide } from "../models/ISlide";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Exercise8 = () => {
  const data = [
    {
      id: 1,
      url: "https://kenwheeler.github.io/slick/img/fonz1.png",
    },
    {
      id: 2,
      url: "https://kenwheeler.github.io/slick/img/fonz2.png",
    },
    {
      id: 3,
      url: "https://kenwheeler.github.io/slick/img/fonz3.png",
    },
  ];
  const [index, setIndex] = useState<number>(0);
  const [slides, setSlides] = useState<ISlide[]>(data);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, slides]);
  useEffect(() => {
    let slider = setInterval(() => {
      if (!isPaused) {
        setIndex(index + 1);
      }
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index, isPaused]);

  const goToSlide = (slideIndex: number) => {
    
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Snackbar open={isPaused} autoHideDuration={2000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Paused
        </Alert>
      </Snackbar>
      <div>
        {slides.map((slide, slideIndex) => {
          const { id, url } = slide;
          let position = "nextSlide";
          if (slideIndex === index) {
            position = "activeSlide";
          }
          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === slides.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <div>
              <article
                className={position}
                key={id}
                onClick={() => setIsPaused(!isPaused)}
              >
                <img src={url} alt="img" className="slide-img" />
              </article>
            </div>
          );
        })}
        <div style={{position:'relative', height:'540px', display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
          <div></div>
          <div style={{ display: "flex", gap: "660px" }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              onClick={() => setIndex(index - 1)}
              style={{ backgroundColor: "#f0153b" }}
            >
              <MdKeyboardArrowLeft style={{ fontSize: "36px" }} />
            </Button>
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#f0153b" }}
              fullWidth
              onClick={() => setIndex(index + 1)}
            >
              <MdKeyboardArrowRight style={{ fontSize: "36px" }} />
            </Button>
          </div>
          <div style ={{display: 'flex', gap:'20px', justifyContent: 'center'}}>
            {slides.map((slide, slideIndex) => (
              <button
                key={slideIndex}
                className={slideIndex === index ? "active" : undefined}
                // onClick={goToSlide(slideIndex)}
              >
                {slideIndex + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise8;
