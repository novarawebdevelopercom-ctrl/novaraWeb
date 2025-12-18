import { Container, Typography } from '@/components/ui'
import classes from "./process.module.css";
import { Card } from '@/components/ui/card/Card';
function Process() {
  return (
    <Container className={classes.bg} >
      <Typography as='h2' color='white'>
Our Process
      </Typography>
      <Card>
        
      </Card>
    </Container>
  )
}

export default Process
