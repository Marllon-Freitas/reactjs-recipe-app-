import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { link, useParams } from "react-router-dom";
import { CuisineCard, Wrapper } from "./styles";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  const params = useParams();

  async function getSelectedCuisine(cuisineName) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisineName}?&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    if (data.code) {
      setCuisine([]);
    } else {
      setCuisine(data.results);
    }
  }
  useEffect(() => {
    getSelectedCuisine(params.type);
  }, [params.type]);

  return (
    <>
      {cuisine.length === 0 ? (
        <h1>A API não ta retornando nada</h1>
      ) : (
        <Wrapper>
          {cuisine.map((cuisine) => {
            return (
              <CuisineCard key={cuisine.id}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={cuisine.id}
                  className="cuisine-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={cuisine.image}
                    alt={cuisine.title}
                    title={cuisine.title}
                  />
                  <h4>{cuisine.title}</h4>
                </motion.div>
              </CuisineCard>
            );
          })}
        </Wrapper>
      )}
    </>
  );
}

export default Cuisine;
