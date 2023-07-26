import React from "react"
import Container from '@mui/material/Container'
import { HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { CardComponent } from "../../components";
import { TypeCharacter } from "./interface/character.interface";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'


export const HomePage: React.FC<{}> = () => {
    const [page, setPage] = React.useState(1);
    const [quantytiCharacter, setQuantytiCharacter] = React.useState("");
    const [count, setCount] = React.useState(1);
    const [allCharacters, setAllCharacters] = React.useState<
      TypeCharacter[] | null
    >(null);
    const [loading, setLoading] = React.useState<boolean>(true);

  
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

    React.useEffect(() => {
      characters
        .info()
        .then((r) => {
          setQuantytiCharacter(r.data.info.count);
        })
        .catch((e) => {
          console.error(e);
        });
    }, []);
  
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      console.log(event)
    };
  
    return (
      <Container maxWidth="xl">
        <HeaderComponent
          title="Store Rick and Morty"
          description="Llevese sus personajes de rick and morty"
          element={<Typography variant="h5">{quantytiCharacter} Personajes hasta el momento</Typography>}
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

