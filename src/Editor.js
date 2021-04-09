const Editor = props => {
    return (
      <div class="grid-item">
        <div class="title">Editor</div>
        <textarea
        id='editor'
        onChange={props.onChange}
        type='text'
        value={props.value}
      /></div>
    );
  };

export default Editor;