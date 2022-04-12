import Navbar from '@/components/Navbar'
import { MainContainer, FullyContainer } from '@/styles/Containers'

const NewBook = () => (
  <>
    <MainContainer>
      <Navbar />
    </MainContainer>
    <FullyContainer>
      <MainContainer>
        <div>
          <div>
            <label>
              <input type="file" />
              Custom Upload
            </label>
          </div>
          <div>
            <form>
              <label htmlFor="">Título</label>
              <input type="text" />
              <div>
                <label htmlFor="">Categoria</label>
                <input type="text" />
                <label htmlFor="">Nome Fantasia</label>
                <input type="text" />
              </div>
              <label htmlFor="">Sinopse</label>
              <input type="text-area" />
            </form>
          </div>
        </div>
      </MainContainer>
    </FullyContainer>
  </>
)

export default NewBook
