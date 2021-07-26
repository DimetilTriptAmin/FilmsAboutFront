export function Film(props){

    const {id, title, description, rating} = props.film;

    return(
        <div>
            
            <div>
                
                {'id:' + id}
                {' '}
                {'Title: ' + title}
                {' '}
                {'Description: ' + description}
                {' '}
                {'Rating: ' + rating}
            </div>
        </div>
    )
}