import { useEffect, useState } from "react"
import { Result } from "../interfaces/IObjAPI"
import {  Container, Row } from "react-bootstrap";
import Article from "./Article";

interface FunctionalComponentProps {
    data: [Result]
  }

const Home =({data}:FunctionalComponentProps)=>{
    const [result,setResult] = useState <Result[]>([])
    const fetchOBJ = async () => {
        try {
          const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
          if (resp.ok) {
            const objApi = await resp.json();
            setResult(objApi.results);
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchOBJ();
        console.log(result);
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


      return(
        
        <Container>
            <Row>    
                <Article data={result}/>
            </Row>

        </Container>
        
      )
}
export default Home