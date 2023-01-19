import { Subscribe } from "./style"

interface SubscribeButtonProps {
    priceId: string
}

export const SubscribeButton = ({priceId}: SubscribeButtonProps) => {
    return (
        <Subscribe>
            Subscribe Now
        </Subscribe>
    )
}