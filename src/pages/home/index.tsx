import React from "react";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { CardComponent } from "../../components";
import { TypeCharacter } from "./interface/character.interface";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'
import CircularProgress from '@mui/material/CircularProgress'

import { useAppSelector } from "../../redux/hooks";

export const HomePage: React.FC<{}> = () => {
    const [page, setPage] = React.useState(1);
    const [count, setCount] = React.useState(1);
    const [allCharacters, setAllCharacters] = React.useState<
      TypeCharacter[] | null
    >(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    const estadoRedux = useAppSelector(state => state.cartReducer)
    console.log(estadoRedux)
  
    React.useEffect(() => {
      setLoading(true);
      characters
        .getAll({ page: page })
        .then((r) => {
          setCount(r.data.info.pages);
          setAllCharacters(r.data.results);
          setTimeout(() => setLoading(false), 1000);
        })
        .catch((e) => {
          console.error(e);
        });
    }, [page]);
  
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    };
  
    return (
      <Container maxWidth="xl">
        <HeaderComponent
          title="Hola mundo"
          description="Hola mundo bienvenido a Codrr"
          element={
            <Button fullWidth variant="contained">
              Hola mundo
            </Button>
          }
        />
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <div>
              {allCharacters!.length !== 0 ? (
                <Grid sx={{ my: 2 }} container spacing={2} direction="row">
                  {allCharacters!.map((character) => (
                    <Grid item xs={3} key={character.id}>
                      <CardComponent
                        img={character.image}
                        name={character.name}
                        species={character.species}
                        status={character.status}
                        id={character.id}
                      />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                "No data"
              )}
            </div>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Pagination
                variant="outlined"
                color="primary"
                count={count}
                page={page}
                onChange={handleChange}
                sx={{ mb: 3 }}
                size="large"
              />
            </Box>
          </>
        )}
      </Container>
    );
  };