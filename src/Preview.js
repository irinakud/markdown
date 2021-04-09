import marked from 'marked'

const Preview = props => {
    marked.setOptions({breaks: true});
    const innerHTML = marked(props.value);
    return (
      <div class="grid-item">
        <div class="title">Previewer</div>
        <div 
        readonly
        id='preview'
        dangerouslySetInnerHTML={{__html: innerHTML}}></div></div>
    );
  };
export default Preview;