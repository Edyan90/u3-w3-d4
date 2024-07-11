import { Button, Card } from "react-bootstrap"
import { FunctionalComponentProps } from "../interfaces/IObjAPI"
 
 
   

const Article=(data:FunctionalComponentProps  )=>{
    return(
        {result.map(data=>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.image_url} />
            <Card.Body>
              <Card.Title className="text-truncate">{data.title}</Card.Title>
              <Card.Text>
               {data.summary}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )}
    )}
  

 
export default Article