type Page = "Home" | "About" | "Contact" | "awaiting" 

export interface contextData {
	currentPage: Page
}

export interface contextProps {
	contextData: contextData
	setContextData: (data: contextData) => void
}