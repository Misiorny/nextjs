import {useRouter} from 'next/router';

function OfferComment(){
  const router=useRouter();
  console.log(router);
  const {id, commentId}=router.query;

  return(
	  <div>
		<h1>Offer!</h1>
		<p>Offer id:{id} Comment id:{commentId}</p>
	  </div>
  )
}

export default OfferComment;
