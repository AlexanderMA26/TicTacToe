export default function Board() {
  return (
  
  <>
  <div classname="Row1">
    <Square />
    <Square />
    <Square />
  </div>
  <div classname="Row2">
  <Square />
  <Square />
  <Square />
  </div>
  <div classname="Row3">
  <Square />
  <Square />
  <Square />
  </div>
  
  
  </>
  );
}

function Square(){
  return <button className="square">1</button>;
}