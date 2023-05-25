import React, {useState} from 'react'
import './TabPostagem.css'
import ListaPostagem from '../listapostagem/ListaPostagem'
import { TabContext, TabPanel } from '@material-ui/lab';
import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core';

function TabPostagem(){
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }

    return(
        <>
        <TabContext value={value}>
            <AppBar position="static">
                <Tabs centered style={{ backgroundColor: "#FF4D6D"}} onChange={handleChange}>
                    <Tab label="Todas as postagens" value="1" />
                    <Tab label="Sobre-nós" value="2" />
                </Tabs>
            </AppBar>
            <TabPanel value="1">
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                    <ListaPostagem />
                </Box>
            </TabPanel>
            <TabPanel value="2">
                <Typography variant="h5" gutterBottom style={{ color: "#FF4D6D"}} component="h5" align="center" className="titulo">Sobre-nós</Typography>
                <Typography variant="body1" gutterBottom style={{ color: "#590D22"}} align="justify">Lorem ipsum dolor sit amet. Sit fuga blanditiis eum quia unde et mollitia temporibus.
                    Et similique perferendis et maiores natus sit voluptatem dolore hic ipsa quos et labore neque. Eos repudiandae voluptatem vel voluptatem esse et omnis veritatis et numquam
                    vero et perferendis autem in temporibus totam ex velit mollitia? Et minus fugit est inventore voluptas sit voluptas voluptates sed tempore esse qui repellendus beatae non similique nihil.
                    Hic odio possimus et laborum voluptas ad odit molestiae. Vel excepturi consequatur et dolores nobis qui dolores vitae non magnam expedita est minus mollitia sed optio ducimus?
                    Non esse enim nam nostrum autem et amet voluptates. Sit consequatur dolorem non omnis quia est minima numquam et tenetur architecto nam laboriosam laudantium ab ratione ipsum.
                    Hic illum consequatur ut aperiam modi ut ducimus asperiores sed voluptas voluptas ut aperiam quos.</Typography>
            </TabPanel>
        </TabContext>
        </>
    );
}

export default TabPostagem;