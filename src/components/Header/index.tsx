import { Container, Content } from "./styles"

export const Header = () => {
    return(
        <>
            <Container>
                <Content>
                    <img src="/images/logo.svg" alt="ig.news" />
                    <nav>
                        <a className="active">Home</a>
                        <a>Posts</a>
                    </nav>
                </Content>
            </Container>
        </>
    )
}