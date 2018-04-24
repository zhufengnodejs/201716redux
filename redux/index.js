let appState = {
    title:{
        color:'red',
        text:'标题'
    },
    content:{
        color:'green',
        text:'内容'
    }
}
function renderApp(appState){
  renderTitle(appState.title);
  renderContent(appState.content);
}
function renderTitle(title){
  let titleDOM = document.getElementById('title');
  titleDOM.innerHTML = title.text;
  titleDOM.style.color = title.color;
}
function renderContent(content){
    let contentDOM = document.getElementById('content');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color;
}
renderApp(appState);