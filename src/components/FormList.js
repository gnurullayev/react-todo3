import React, { useState } from 'react';

function FormList({addPost,clearList}) {
    const [value,setValue] = useState("");
    const [isValid, setValid] = useState(true)

    const newPost =  (e) => {
      e.preventDefault()

      if(value) {
        let obj = {
          id: new Date().getTime(),
          label: value,
          complate: false,
        }
  
        addPost(obj)
        setValid(true)
        setValue("")
      }else{
        setValid(false)
      }  
    }


    return (
        <>
            <form className="form" onSubmit={newPost}>
              <div className="row gy-3">
                <div className="col-12 col-md-6">
                  <input 
                  className="js-input form-control" 
                  type="text" 
                  placeholder="Malumot kiriting"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  style = {{borderColor: isValid ? "green" : "red" }}
                  />
                  <span className={`text-danger ${isValid ? "d-none" : "d-block"}` }>Inputga malumot kiriting</span>
                </div>

                <div className="col-12 col-md-3">        
                  <button 
                  type='submit'
                  className="btn btn-info w-100" 
                  onClick={newPost}
                  >
                    Submit
                  </button>
                </div>

                <div className="col-12 col-md-3">        
                  <button 
                  type='reset'
                  className="btn btn-danger w-100" 
                  onClick = {() => clearList(setValid(true))}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
        </>
    );
}

export default FormList;