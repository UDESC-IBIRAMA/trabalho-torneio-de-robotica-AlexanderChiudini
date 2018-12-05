package udesc.ceavi.robotica.repositorio;

import udesc.ceavi.robotica.model.Integrante;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Aparicio
 */
public interface IntegranteRepositorio extends JpaRepository<Integrante, Long>{
    
}
