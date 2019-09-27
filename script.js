let status = "View More +";

let toggleContent = () => {
	if(status === "View More +"){
		$("#view-more span").text("Show Less -");
		$(".fact-toggle").slideDown();
		status = "Show Less -";
	}else if(status === "Show Less -"){
		$("#view-more span").text("View More +");
		$(".fact-toggle").slideUp();
		status = "View More +";
	}
}


let toggleModal = () => {
  $(".image-modal").toggle();
}

