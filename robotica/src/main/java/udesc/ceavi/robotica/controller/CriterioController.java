package udesc.ceavi.robotica.controller;

import udesc.ceavi.robotica.model.Criterio;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import udesc.ceavi.robotica.repositorio.CriterioRepositorio;

/**
 *
 * @author Aparicio
 */

@RestController
@RequestMapping("/criterios")
public class CriterioController {
    
    @Autowired
    
    private CriterioRepositorio cri;
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public Criterio buscar(@PathVariable long id) {
        return cri.findById(id).get();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<Criterio> buscar() {
        return cri.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public Criterio salvar(@RequestBody Criterio c) {
        return cri.save(c);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable long id) {
        cri.deleteById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public Criterio atualizar(@PathVariable long id, @RequestBody Criterio cr) {
        Optional<Criterio> criSalvo = cri.findById(id);
        Criterio c = criSalvo.get();//Transforma optional na entidade
        BeanUtils.copyProperties(cr, c, "id");
        cri.save(c);
        return c;
    }
}
