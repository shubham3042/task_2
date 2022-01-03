import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';
import React, { useState,useRef } from 'react';
const AddPop=(props)=>{
    const [name,setName]=useState('');
    const [role,setRole]=useState('');
    const [desc,setDesc]=useState('');
    const [file,setFile]=useState();
    const ref=useRef();

    return <Dialog open={props.open} onClose={props.close} fullWidth>
           <DialogContent>
            <div style={{display:'flex',gap:'5px',alignItems:'center'}}>
                <label style={{width:'120px'}} >Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div  style={{display:'flex',gap:'5px',alignItems:'center'}}>
                <label style={{width:'120px'}}>Role</label>
                <input type="text" value={role} onChange={(e)=>setRole(e.target.value)} />
            </div>
            <div  style={{display:'flex',gap:'5px',alignItems:'center'}}>
                <label style={{width:'120px'}}>description</label>
                <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} />
            </div>
            <div  style={{display:'flex',gap:'5px',alignItems:'center'}}>
                <label style={{width:'120px'}}>Photo</label>
                <input type="file" name='file' ref={ref} onChange={(e)=>setFile(e.target.files[0])} />
            </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{
                    setName('');
                    setDesc('');
                    setRole('');
                    setFile();
                    props.close();
                    ref.current.value = "";
                }}>Cancel</Button>
                <Button onClick={()=>{props.submit({name:name,desc:desc,role:role,img:file});
            setName('');
            setDesc('');
            setRole('');
            setFile();}}>Submit</Button>
            </DialogActions>
    </Dialog>
}
export default AddPop