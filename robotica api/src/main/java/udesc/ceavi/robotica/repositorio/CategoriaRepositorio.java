package udesc.ceavi.robotica.repositorio;

import udesc.ceavi.robotica.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Aparicio
 */
public interface CategoriaRepositorio extends JpaRepository<Categoria, Long>{
    
}
