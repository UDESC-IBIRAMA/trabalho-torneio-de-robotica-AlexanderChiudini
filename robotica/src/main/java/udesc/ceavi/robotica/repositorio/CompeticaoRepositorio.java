package udesc.ceavi.robotica.repositorio;

import udesc.ceavi.robotica.model.Competicao;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Aparicio
 */
public interface CompeticaoRepositorio extends JpaRepository<Competicao, Long> {
    
}
