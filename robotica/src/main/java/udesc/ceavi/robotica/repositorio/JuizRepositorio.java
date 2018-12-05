package udesc.ceavi.robotica.repositorio;

import udesc.ceavi.robotica.model.Juiz;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Aparicio
 */
public interface JuizRepositorio extends JpaRepository<Juiz, Long> {
    
}
