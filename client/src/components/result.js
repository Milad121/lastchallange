export default function Result(props) {
    return (
         <li class="search-item">

                <div class="search-item-content">
                <h3 class="search-item-caption"><a href={"./view/" + props.qoute._id} >{props.qoute.question}</a></h3>

                    <div class="search-item-meta mb-15">
                        <ul class="list-inline">
                            <li class="time">{props.qoute.Dateofquestion}</li>
                            <li>{props.qoute.comments.countDocuments} Comments</li>
                            <li><a href={"./view/" + props.qoute._id}>Read More</a></li>
                        </ul>
                    </div>
                    <div>
                        {props.qoute.discription}
                    </div>
                </div>
            </li>
   
    )
}