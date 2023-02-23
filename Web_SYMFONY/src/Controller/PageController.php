<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(): Response
    {
        return $this->render('page/index.html.twig', []);
    }

    #[Route('/entrenamiento', name: 'entrenamiento')]
    public function entrenamiento(): Response
    {
        return $this->render('page/entrenamiento.html.twig', []);
    }

    #[Route('/nutricion', name: 'nutricion')]
    public function nutricion(): Response
    {
        return $this->render('page/nutricion.html.twig', []);
    }

    #[Route('/ropa', name: 'ropa')]
    public function ropa(): Response
    {
        return $this->render('page/ropa.html.twig', []);
    }

    #[Route('/contacto', name: 'contacto')]
    public function contacto(): Response
    {
        return $this->render('page/contacto.html.twig', []);
    }

    #[Route('/blog', name: 'blog')]
    public function blog(): Response
    {
        return $this->render('page/blog.html.twig', []);
    }

    #[Route('/trensuperior', name: 'trensuperior')]
    public function trensuperior(): Response
    {
        return $this->render('page/trensuperior.html.twig', []);
    }

    #[Route('/treninferior', name: 'treninferior')]
    public function treninferior(): Response
    {
        return $this->render('page/treninferior.html.twig', []);
    }

    #[Route('/cardiovascular', name: 'cardiovascular')]
    public function cardiovascular(): Response
    {
        return $this->render('page/cardiovascular.html.twig', []);
    }

    #[Route('/sudaderas', name: 'sudaderas')]
    public function sudaderas(): Response
    {
        return $this->render('page/sudaderas.html.twig', []);
    }

    #[Route('/zapatilla', name: 'zapatilla')]
    public function zapatillas(): Response
    {
        return $this->render('page/zapatilla.html.twig', []);
    }

    #[Route('/chandales', name: 'chandales')]
    public function chandales(): Response
    {
        return $this->render('page/chandales.html.twig', []);
    }


    #[Route('/ropalogeadochandal', name: 'ropalogeadochandal')]
    public function ropalogeado(): Response
    {
        return $this->render('page/ropalogeado_chandal.html.twig', []);
    }
    
    #[Route('/ropalogeadozapatillas', name: 'ropalogeadozapatillas')]
    public function ropalogeadozapatillas(): Response
    {
        return $this->render('page/ropalogeado_zapatillas.html.twig', []);
    }
    
}

