const List = ({list , onClick}) => {
    return (
      list.map( category => (
        <button 
          onClick={() => onClick(category.list_name_encoded)}
          key = {category.list_name_encoded}
          className = 'list-category' >
            {category.display_name}
        </button>   
      )
    ));
  };

export default List;  