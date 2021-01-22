const NoPage = (toast) => {
	toast.closeAll()
	toast({
		title: 'Notice',
		description:
			"This is a dummy link that doesn't go anywhere. For an example of a working link, take a look at the Blog.",
		status: 'info',
		duration: 3000,
		isClosable: true,
	})
}

export default NoPage
